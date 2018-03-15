'use strict';

/**
 * Issuing new badge
 * @param {org.acme.openbadge.issueBadge} badge
 * @transaction
 */

 function issueBadge( badge ){

    Promise.all([
    getAssetRegistry('org.acme.openbadge.Badge'),
    getParticipantRegistry('org.acme.openbadge.Teacher'),
    getParticipantRegistry('org.acme.openbadge.Validator'),
    getParticipantRegistry('org.acme.openbadge.Student')
    ]).then(function(registries){
    return (
      registries[0].update(badge.badge),
      registries[1].update(badge.issuer),
      registries[2].update(badge.validator),
      registries[3].update(badge.owner)
    )
    })
 }

 /**
 * Validating new badge
 * @param {org.acme.openbadge.validateBadge} badge
 * @transaction
 */

 function validateBadge( badge ){

    badge.badge.validated = true

    Promise.all([
    getAssetRegistry('org.acme.openbadge.Badge'),
    getParticipantRegistry('org.acme.openbadge.Teacher'),
    getParticipantRegistry('org.acme.openbadge.Validator'),
    getParticipantRegistry('org.acme.openbadge.Student')
    ]).then(function(registries){
    return (
      registries[0].update(badge.badge),
      registries[1].update(badge.issuer),
      registries[2].update(badge.validator),
      registries[3].update(badge.owner)
    )
    })
 }
